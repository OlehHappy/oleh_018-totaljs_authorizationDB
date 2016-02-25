F.on('module#auth', function(type, name) {
	var auth = MODULE('auth');
	auth.onAuthorize = function(id, callback, flags) {

        // - this function is cached
        // - here you must read user information from a database
        // - insert the user object into the callback (this object will be saved to session/cache)

        if (id === '1')
            return callback({ id: '1', alias: 'Peter Sirka' });

        callback(null);

        // if user not exist then
        // callback(null);
	};
});
