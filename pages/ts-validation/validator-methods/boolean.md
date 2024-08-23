
# Boolean

ready function to use to validate booleans

```typescript
v.boolean()
  .undefined()       // Allows `undefined`
  .required()        // Requires a value
  .true()            // Value must be `true`
  .false()           // Value must be `false`
  .equals(true)      // Value must be equal to `true`
  .equals(false)     // Value must be equal to `false`
  .as<Type>('key')   // Same as for strings
```