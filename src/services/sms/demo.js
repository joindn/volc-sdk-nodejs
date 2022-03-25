import { sms } from "joindn-volc-sdk-nodejs";

export async function main(AccessKeyId, SecretKey, SessionToken) {
  // 使用默认的service实例 也可以创建一个新实例 const iamService = new iam.IamService();
  const smsService = sms.defaultService;
  // 设置aksk
  smsService.setAccessKeyId(AccessKeyId);
  smsService.setSecretKey(SecretKey);
  if (SessionToken) {
    // 使用sts请求时 设置SessionToken
    smsService.setSessionToken(SessionToken);
  }

  // 请求预定义的OpenAPI
  await smsService.SendSms({
    PhoneNumbers: "18500000000",
    TemplateParam: '{"code": "1234"}',
    Sign: "测试",
    Tag: "tag",
    SmsAccount: "19bxxxx",
    TemplateID: "ST_6xxxx",
  });
}
