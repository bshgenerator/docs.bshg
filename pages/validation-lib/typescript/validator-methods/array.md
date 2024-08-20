
# Arrays

ready function to use to validate arrays

```typescript
v.array()
  .required()        // Requires a value
  .length(5)         // Array must have a length of 5
  .min(5)            // Minimum length required is 5
  .max(10)           // Maximum length allowed is 10
  .has("value")      // Array must include "value"
  .hasAll(["value1", "value2"])  // Array must include all of: value1, value2
  .hasAny(["value1", "value2"])  // Array must include any of: value1, value2
  .hasNone(["value1", "value2"]) // Array must include none of: value1, value2
  .some(predicate)   // Array matches the given predicate
  .every(predicate)  // Every element in the array matches the given predicate
```