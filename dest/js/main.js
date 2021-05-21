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
                url = url + (id != '' ? 'users/' + id : 'users/');
                console.log('----', id);

                $.ajax({
                    type: 'GET',
                    url: url,
                    success: (payload) => {
                        console.log(payload);
                        $.each(payload, (i, item) => {
                            output.append('<li><h3>ID:' + item.id + '</h3><h3>Name:' + item.name + '</h3><p>Username:' + item.username + '</p><p>Email:' + item.email + '</p></li>');
                        });
                    },
                    error: () => {
                        alert("Error loading data.");
                    }
                });
            });

            $('#form .submit').on('click', () => {
                $.ajax({
                    type: 'POST',
                    url: url,
                    success: () => {
                        output.append('<li><h3>Name:' + item.name + '</h3><p>Username:' + item.username + '</p><p>Email:' + item.email + '</p></li>');
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
