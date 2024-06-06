const authEmulatorPath = process.env.NEXT_PUBLIC_EMULATOR_AUTH_PATH;
const isDevelopmentEnv = process.env.NEXT_PUBLIC_APP_ENV === "development";

export { authEmulatorPath, isDevelopmentEnv };
