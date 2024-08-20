
# DateTime

ready function to use to validate date-time like data

```typescript
v.datetime()
  .undefined()       // Allows `undefined`
  .required()        // Requires a value
  .after(new Date()) // DateTime must be after the specified date
  .before(new Date())  // DateTime must be before the specified date
  .between(new Date(), new Date())  // DateTime must be between the specified start and end dates
  .todayOrAfter()    // DateTime must be today or after today
  .todayOrBefore()   // DateTime must be today or before today
  .past()            // DateTime must be in the past
  .future()          // DateTime must be in the future
  .weekday()         // DateTime must be a weekday (Monday to Friday)
  .weekend()         // DateTime must be a weekend (Saturday or Sunday)
  .as<Type>('key')   // Same as for strings
```