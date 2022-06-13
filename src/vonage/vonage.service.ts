import { Injectable } from '@nestjs/common';
// import OpenTok from "opentok";
import OpenTok = require('opentok');
import { ConfigService } from '@nestjs/config'

@Injectable()
export class VonageService {
  constructor(
    private configService: ConfigService,
  ){}

  generateOpentok(): OpenTok {
    const vonageApiKey: string = this.configService.get<string>('VONAGE_API_KEY')
    const vonageSecret: string = this.configService.get<string>('VONAGE_SECRET')
    return new OpenTok(vonageApiKey, vonageSecret);
  }

  async createSession(): Promise<string> {
    const opentok: OpenTok = this.generateOpentok();
    return await new Promise((resolve) => {
      opentok.createSession({ mediaMode: "routed" }, (err, session: OpenTok.Session) => {
        if (err) return console.log(err);
      
        resolve(session)
      });
    }).then((session: OpenTok.Session) => {
      return session.sessionId
    }).catch((e) => {
      console.log(e)
      throw Error
    })
  }

  generateToken(sessionId: string, role: OpenTok.Role): string {
    const opentok: OpenTok = this.generateOpentok();
    const token: string = opentok.generateToken(sessionId, {
      role: role,
      expireTime: new Date().getTime() / 1000 + 7 * 24 * 60 * 60, // in one week
    });
    return token
  }
}
