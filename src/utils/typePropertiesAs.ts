export const typePropertiesAs = <P>() =>
  <O extends Record<PropertyKey, P>>(obj: O) => obj