import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { setStatusBarColors } from '../platforms/android/app/src/main/assets/app/app/utils/status-bar-util';

setStatusBarColors();

platformNativeScriptDynamic().bootstrapModule(AppModule);
