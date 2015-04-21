angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope, Api) {
        $scope.data = null;
        Api.getApiData()
            .then(function(result) {
                $scope.data = result.data;
            })
    })

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
