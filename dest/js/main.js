(() => {
    let main = {
        init: () => {
            main.api();
        },
        api: () => {
            //Free fake API for testing and prototyping.
            let url = 'https://jsonplaceholder.typicode.com/';
            let output = $('#output');

            $('.get-data').on('click', () => {
                let id = $('.find-id').val();
                output.html('');

                $.ajax({
                    type: 'GET',
                    url: url + (id != '' ? 'users/' + id : 'users/'),
                    success: (payload) => {
                        console.log('--- payload', payload);
                        if(id !='') {
                            output.append('<li><h3>ID:' + payload.id + '</h3><h3>Name:' + payload.name + '</h3><p>Username:' + payload.username + '</p><p>Email:' + payload.email + '</p></li>');
                        } else {
                            $.each(payload, (i, item) => {
                                output.append('<li><h3>ID:' + item.id + '</h3><h3>Name:' + item.name + '</h3><p>Username:' + item.username + '</p><p>Email:' + item.email + '</p></li>');
                            })
                        }
                    },
                    error: () => {
                        alert("Error loading data.");
                    }
                });
            });

            $('#form .submit').on('click', () => {
                let postData = {
                    "name":  $('#form .name').val(),
                    "username": $('#form .username').val(),
                    "email": $('#form .email').val(),
                }                
                output.html('');

                $.ajax({
                    type: 'POST',
                    url: url,
                    data: postData,
                    success: (payload) => {
                        output.append('<li><h3>Name:' + payload.name + '</h3><p>Username:' + payload.username + '</p><p>Email:' + payload.email + '</p></li>');
                    },
                    error: () =>  {
                        alert('Error posting data.');
                    }
                });
            });
        }
    };

    $(document).ready(() => {
        main.init();
    });
})();
