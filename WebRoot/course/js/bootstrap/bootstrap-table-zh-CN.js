/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['zh-CN'] = {
        formatLoadingMessage: function () {
            return '����Ŭ���ؼ��������У����Ժ򡭡�';
        },
        formatRecordsPerPage: function (pageNumber) {
            return 'ÿҳ��ʾ ' + pageNumber + ' ����¼';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return '��ʾ�� ' + pageFrom + ' ���� ' + pageTo + ' ����¼���ܹ� ' + totalRows + ' ����¼';
        },
        formatSearch: function () {
            return '����';
        },
        formatNoMatches: function () {
            return 'û���ҵ�ƥ��ļ�¼';
        },
        formatPaginationSwitch: function () {
            return '����/��ʾ��ҳ';
        },
        formatRefresh: function () {
            return 'ˢ��';
        },
        formatToggle: function () {
            return '�л�';
        },
        formatColumns: function () {
            return '��';
        },
        formatExport: function () {
            return '��������';
        },
        formatClearFilters: function () {
            return '��չ���';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

})(jQuery);