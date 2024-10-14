export enum DeviceEvent {
  FIRMWARE_UPDATE = 'update_firmware',
  RESIDENTS_UPDATE = 'update_residents',
  ACCESS_KEYS_UPDATE = 'update_access_keys',
  MAIN_SETTINGS_UPDATE = 'update_main_settings',
  OPEN_ANDROID_SETTINGS = 'open_android_settings',
  CLOSE_ANDROID_SETTINGS = 'close_android_settings',
  OPEN_ROOT_SETTINGS = 'open_root_settings',
  CLOSE_ROOT_SETTINGS = 'close_root_settings',
  OPEN_SOUND_BOOSTER = 'open_sound_booster',
  CLOSE_SOUND_BOOSTER = 'close_sound_booster',
  OPEN_DOOR = 'open_door',
  REBOOT = 'reboot',
  RESET = 'reset',
  SHUTDOWN = 'shutdown',
}

export interface EventTrigger {
  deviceId: number;
  event: DeviceEvent;
  options?: any;
}
