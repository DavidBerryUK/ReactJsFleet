export default class CookieHelper {

    static create(name :string, value: string, daysBeforeExpire: number)
    {
        var date = new Date();
        date.setTime(date.getTime() + (daysBeforeExpire * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    static read(name : string) {
        var nameEq = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
        }
        return null;
    }

    static  delete(name : string) {
        CookieHelper.create(name, "", -1);
    }

}