var UIModals = function () {
   // hàm khởi tạo các phương thức mở rộng của bootstrap
    var initModals = function () {
        $.fn.modalmanager.defaults.resize = true;
        $.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner =
            '<div class="loading-spinner" style="width: 200px; margin-left: -100px;">' +
            '<div class="progress progress-striped active">' +
            '<div class="progress-bar" style="width: 100%;"></div>' +
            '</div>' +
            '</div>';
        var $modal = $('#ajax-modal');
        $('.ajax .demo').on('click', function () {
          // tạo phông nền và đợi phương thức tiếp theo được kích hoạt
            $('body').modalmanager('loading');
            setTimeout(function () {
                $modal.load('modal_ajax_test.html', '', function () {
                    $modal.modal();
                });
            }, 1000);
        });
        $modal.on('click', '.update', function () {
            $modal.modal('loading');
            setTimeout(function () {
                $modal
                    .modal('loading')
                    .find('.modal-body')
                    .prepend('<div class="alert alert-info fade in">' +
                        'Updated!<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                        '</div>');
            }, 1000);
        });
    };
    return {
        init: function () {
            initModals();
        }
    };
}();