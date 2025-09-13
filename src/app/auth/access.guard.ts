import { inject } from "@angular/core";
import { AuthService } from "./auth.service";

// ещё требуется разобратся с этим 1:43:52
export const canActivateAuth = () => {
    // недоделано, незнаю как это сделать лучше, какойто isAuth должен быть
    const isLoggedIn = inject(AuthService);
}