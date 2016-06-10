angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {


    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
  

    // Functions
    // ----------------------------------------------------------------------------
    // Creates a new user based on the form fields
    $scope.createUser = function() {

        // Grabs all of the text box fields
        var userData = {
            favlang: $scope.formData.favlang
        };

        // Saves the user data to the db
        $http.post('/users', userData)
            .success(function (data) {

                // Once complete, clear the form (except location)
                $scope.formData.favlang = "";
                
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});