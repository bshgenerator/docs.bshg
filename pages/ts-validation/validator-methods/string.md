# String

ready function to use to validate strings

```typescript
v.string()
  .undefined()       // Allows `undefined`
  .required()        // Requires a value
  .min(5)            // Minimum length is 5
  .max(10)           // Maximum length is 10
  .includes("sub")   // Must include 'sub'
  .includesAll(["sub1", "sub2"])  // Must include 'sub1' and 'sub2'
  .startsWith("prefix")   // Must start with 'prefix'
  .endsWith("suffix")     // Must end with 'suffix'
  .matches(/regexp/)      // Must match the regular expression
  .email()               // Must be a valid email
  .phone()               // Must be a valid phone number
  .url()                 // Must be a valid URL
  .date()                // Must be a valid date (yyyy-mm-dd)
  .time()                // Must be a valid time (hh:mm:ss)
  .hexColor()            // Must be a valid hex color
  .creditCard()          // Must be a valid credit card number
  .htmlTag()             // Must be a valid HTML tag
  .base64()              // Must be a valid base64 string
  .alphanumeric()        // Must contain only numbers and letters
  .numeric()             // Must contain only numbers
  .alpha()               // Must contain only letters
  .as<Type>('key')       // Ensures the value is equal to the value of the specified 'key' property in the parent object.
                         // The 'key' must be a valid key of Type.
```