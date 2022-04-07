const CONFIGCAT_MOCK = {
  createClient: (sdkKey: string): string => 'connected!'
};

export default class ConfigCat {
  protected static configCatClient: any;

  init(sdkKey: string) {
    ConfigCat.configCatClient = CONFIGCAT_MOCK.createClient(sdkKey);
    return ConfigCat.configCatClient;
  }
}