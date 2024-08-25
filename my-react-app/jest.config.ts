// module.exports = {
//   preset: 'ts-jest',  // For TypeScript
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript files
//     '^.+\\.(js|jsx)$': 'babel-jest',  // Transform JavaScript files
//   },
//   moduleNameMapper: {
//     // "^uuid$": require.resolve("uuid"), 
//     // "^jsonpath-plus$": require.resolve("jsonpath-plus") ,
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     '^.+\\.svg$': 'jest-transformer-svg',
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   testPathIgnorePatterns: ['/node_modules/', '/dist/'],
// };

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

 