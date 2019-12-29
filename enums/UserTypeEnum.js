module.exports = (function() {
    'use strict';

    const UserTypeEnum = {
        SYSTEM_ADMIN: "SYSTEM_ADMIN",
        MEMBER_USER: "MEMBER_USER",
        MERCHANT_USER: "MERCHANT_USER",
        properties: {

        },
        exists: function (userType) {
            for (var key in UserTypeEnum) {
                return UserTypeEnum[key] === userType;
            }
            return false;
        }
    };

    return UserTypeEnum;
})();
