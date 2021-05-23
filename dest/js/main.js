(() => {
    let main = {
        init: () => {
            main.api();
        },
        api: () => {
            //Free fake API for testing and prototyping.
            let url = 'https://jsonplaceholder.typicode.com/';
            let output = $('#output');

            // GET
            $('.get-data').on('click', () => {
                let id = $('.find-id').val();
                output.html('');

                $.ajax({
                    type: 'GET',
                    url: url + (id != '' ? 'users/' + id : 'users/'),
                    success: (payload) => {
                        console.log('--- payload', payload);
                        if(id !='') {
                            output.append('<li data-id="' + payload.id + '"><h3>ID:' + payload.id + '</h3><h3>Name:' + payload.name + '</h3><p>Username:' + payload.username + '</p><p>Email:' + payload.email + '</p><div class="close">X</div></li>');
                        } else {
                            $.each(payload, (i, item) => {
                                output.append('<li data-id="' + item.id + '"><h3>ID:' + item.id + '</h3><h3>Name:' + item.name + '</h3><p>Username:' + item.username + '</p><p>Email:' + item.email + '</p><div class="close">X</div></li>');
                            })
                        }
                    },
                    error: () => {
                        alert("Error loading data.");
                    }
                });
            });

            // POST
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
                        output.append('<li data-id="' + payload.id + '"><h3>Name:' + payload.name + '</h3><p>Username:' + payload.username + '</p><p>Email:' + payload.email + '</p><div class="close">X</div></li>');
                    },
                    error: () =>  {
                        alert('Error posting data.');
                    }
                });
            });

            // DELETE
            output.delegate('.close', 'click', () => {
                let li = $(this).closest('li');
                let id = li.attr('data-id');
                console.log('---id', $(this));

                $.ajax({
                    type: 'DELETE',
                    url: url + 'posts/' + id ,
                    success: () => {
                        li.remove();
                    }
                });
            });



        }
    };

    $(document).ready(() => {
        main.init();
    });
})();
