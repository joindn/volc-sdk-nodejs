import Service from "../../base/service";
import { ServiceOptions } from "../../base/types";

interface SendSmsParams {
  PhoneNumbers: string;
  TemplateParam: string;
  Sign: string;
  Tag: string;
  SmsAccount: string;
  TemplateID: string;
}

interface SendSmsResult {
  MessageID: string[];
}

export class SmsService extends Service {
  constructor(options?: ServiceOptions) {
    super({
      ...options,
      host: "sms.volcengineapi.com",
      serviceName: "volcSMS",
    });
  }
  SendSms = this.createAPI<SendSmsParams, SendSmsResult>("SendSms", {
    method: "POST",
    contentType: "json",
    Version: "2020-01-01",
  });
}

export const defaultService = new SmsService();
