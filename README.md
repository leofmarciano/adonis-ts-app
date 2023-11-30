```
node version: 20.10.0, also tested with   20.9.0, 18.16.0 and 16.0.0
npm version: 10.2.3
platform: Windows 11 64bit, also tested with macOS Sonoma 14.1.1
```

Error:
```bash
[12:02:07.642] ERROR (adonis-direct-upload/20044): Cannot read properties of undefined (reading 'onFile')
    err: {
      "type": "TypeError",
      "message": "Cannot read properties of undefined (reading 'onFile')",
      "stack":
          TypeError: Cannot read properties of undefined (reading 'onFile')
              at UploadsController.handle (###ommited###\app\Controllers\Http\UploadsController.ts:5:27)
              at Injector.callAsync (##ommited###\\adonis-direct-upload\node_modules\@adonisjs\fold\build\src\Ioc\Injector.js:124:30)
              at processTicksAndRejections (node:internal/process/task_queues:95:5)
      "status": 500
    }
```

