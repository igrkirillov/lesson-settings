import Settings from "../Settings";

describe("settings module", () => {
  test ("settings base case", () => {
    const settings = new Settings();
    settings.setPreferenceMusic("pop");
    settings.setPreferenceDifficulty("hard");
    expect(settings.settings).toEqual(new Map([
      ["theme", "dark"],
      ["music", "pop"],
      ["difficulty", "hard"]
    ]));
  });
  test ("all settings from preference", () => {
    const settings = new Settings();
    settings.setPreferenceMusic("pop");
    settings.setPreferenceDifficulty("hard");
    settings.setPreferenceTheme("light");
    expect(settings.settings).toEqual(new Map([
      ["theme", "light"],
      ["music", "pop"],
      ["difficulty", "hard"]
    ]));
  });
  test ("settings set failure while try to set unknown theme", () => {
    const settings = new Settings();
    expect(() => settings.setPreferenceTheme("abra-kadabra")).toThrow(Error);
  });
  test ("settings set failure while try to set unknown music", () => {
    const settings = new Settings();
    expect(() => settings.setPreferenceMusic("abra-kadabra")).toThrow(Error);
  });
  test ("settings set failure while try to set unknown difficulty", () => {
    const settings = new Settings();
    expect(() => settings.setPreferenceDifficulty("abra-kadabra")).toThrow(Error);
  });
});