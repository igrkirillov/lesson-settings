export default class Settings {

  constructor() {
    this.default = new Map();
    this.preferences = new Map();
    this.allThemes = ["light", "gray", "dark"];
    this.allMusics = ["trance", "pop", "chillout", "off"];
    this.allDifficulties = ["easy", "normal", "hard", "nightmare"];
    this.initDefault();
  }

  initDefault() {
    this.setTheme(this.default, "dark");
    this.setMusic(this.default, "trance");
    this.setDifficulty(this.default, "easy");
  }

  setPreferenceTheme(value) {
    this.setTheme(this.preferences, value);
  }

  setPreferenceMusic(value) {
    this.setMusic(this.preferences, value);
  }

  setPreferenceDifficulty(value) {
    this.setDifficulty(this.preferences, value);
  }

  setTheme(map, value) {
    if (!this.allThemes.includes(value)) {
      throw new Error(`Неизвестная тема ${value}!`);
    }
    map.set("theme", value);
  }

  setMusic(map, value) {
    if (!this.allMusics.includes(value)) {
      throw new Error(`Неизвестная музыка ${value}!`);
    }
    map.set("music", value);
  }

  setDifficulty(map, value) {
    if (!this.allDifficulties.includes(value)) {
      throw new Error(`Неизвестный уровень сложности ${value}!`);
    }
    map.set("difficulty", value);
  }

  get settings() {
    const result = new Map();
    for (const key of this.default.keys()) {
      result.set(key, this.getCurrentSetting(key));
    }
    return result;
  }

  getCurrentSetting(key) {
    return  this.preferences.get(key) || this.default.get(key);
  }
}