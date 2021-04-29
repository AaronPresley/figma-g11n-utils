import { getValue, setValue } from "./utils/storage";

const configureSettings = async () => {
  // An array of each setting path, and what their default value
  // should be IF they haven't been set already.
  const settings = [
    {
      path: 'pseudoTranslate.doExpand',
      initialValue: true,
    },
    {
      path: 'pseudoTranslate.prependChars',
      initialValue: '',
    },
    {
      path: 'pseudoTranslate.appendChars',
      initialValue: '',
    },
  ];

  const calls = [];
  
  // Loop through each item and set the value
  settings.forEach(async ({ path, initialValue }) => {
    // The current value
    const currVal = await getValue(path);
  
    // Only set the inital value if there isn't one already
    if (currVal === undefined) {
      console.log(`Setting init value of ${path} to ${initialValue}`);
      calls.push(setValue(path, initialValue));
    }
  });
  
  return Promise.all(calls);
};

// This code is run each time the plugin is run
export default async () => {
  await configureSettings();
};