var current_node_4;
var tree_selector_4;
var data = [{
    "text": "Skyscraper",
    "state": {
        "opened": true
    },
    "children": [
        {
            "text": "Presentations",
            "children": [
                { "text": "Overview.ppt", "icon": "fa fa-file-powerpoint text-success" },
                { "text": "Strategy.ppt", "icon": "fa fa-file-powerpoint text-success" },
            ]
        },
        {
            "text": "Financial",
            "children": [
                { "text": "Estimated cost.doc", "icon": "fa fa-file text-success" },
                { "text": "Labor costs.xlsx", "icon": "fa fa-file-excel text-success" },
            ]
        },
        {
            "text": "Drawings",
            "state": {
                "opened": true
            },
            "children": [
                { "text": "Floor 1.dwg", "icon": "fa fa-file-pdf text-success" },
                { "text": "Floor 2.dwg", "icon": "fa fa-file-pdf text-success" },
                { "text": "Floor 3.dwg", "icon": "fa fa-file-pdf text-success" },
                { "text": "Floor 4.dwg", "icon": "fa fa-file-pdf text-success" },
                { "text": "Custom Living.. .dwg", "icon": "fa fa-file-pdf text-success" },
                { "text": "Custom Bed.. .dwg", "icon": "fa fa-file-pdf text-success" },
            ]
        },
        {
            "text": "Polices & Penalties",

            "children": [
                { "text": "Penalties.doc", "icon": "fa fa-file-word text-success" },
            ]
        }
    ]
}
]


toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

var modal_opened_by_button = false;

$("#kt_tree_44").jstree({
    "core": {
        "themes": {
            "responsive": false
        },
        // so that create works
        "check_callback": true,
        'data': data
    },
    "types": {
        "default": {
            "icon": "fa fa-folder text-primary"
        },
        "file": {
            "icon": "fa fa-file  text-success"
        }
    },
    "state": { "key": "demo2" },
    "plugins": ["state", "types", "wholerow",],

});

$("#kt_tree_4").jstree({
    "core": {
        "themes": {
            "responsive": false
        },
        // so that create works
        "check_callback": true,
        'data': data
    },
    "types": {
        "default": {
            "icon": "fa fa-folder text-primary"
        },
        "file": {
            "icon": "fa fa-file  text-success"
        }
    },
    "state": { "key": "demo2" },
    "plugins": ["contextmenu", "state", "types", 'dnd'],
    "contextmenu": {
        "items": function ($node) {

            var tree = $("#kt_tree_4").jstree(true);
            current_node_4 = $node;
            tree_selector_4 = tree;

            return {
                "Create": {
                    "separator_before": false,
                    "separator_after": true,
                    "label": "Create",
                    "action": false,
                    "submenu": {
                        "File": {
                            "seperator_before": false,
                            "seperator_after": false,
                            "label": "File",
                            action: function (obj) {
                                $('#upload').modal('show')
                                modal_opened_by_button = false;
                                disable_44_nodes()

                                // $node = tree.create_node($node, { text: 'New File', type: 'file', icon: 'fa fa-file text-success' });
                                // tree.deselect_all();
                                // tree.select_node($node);
                            }
                        },
                        "Folder": {
                            "seperator_before": false,
                            "seperator_after": false,
                            "label": "Folder",
                            action: function (obj) {
                                // modal_opened_by_button = false;

                                $node = tree.create_node($node, { text: 'New Folder', type: 'default' });
                                tree.deselect_all();
                                tree.select_node($node);
                            }
                        }
                    }
                },
                "Rename": {
                    "separator_before": false,
                    "separator_after": false,
                    "label": "Rename",
                    "action": function (obj) {
                        tree.edit($node);
                    }
                },
                "Remove": {
                    "separator_before": false,
                    "separator_after": false,
                    "label": "Remove",
                    "action": function (obj) {
                        tree.delete_node($node);
                    }
                },
                "Checkin": {
                    "separator_before": true,
                    "separator_after": false,
                    "label": "Checkin",
                    "action": function (obj) {
                        // tree.edit($node);
                    }
                },
                "Checkout": {
                    "separator_before": false,
                    "separator_after": false,
                    "label": "Checkout",
                    "action": function (obj) {
                        // tree.edit($node);
                    }
                },
            };
        }
    }
});

// $('#kt_tree_44').on("changed.jstree", function (e, data) {
//     console.log(data);
//     let modal_data = $('#kt_tree_44').jstree(true).settings.core.data
//     $('#kt_tree_4').jstree(true).settings.core.data = modal_data;
// });

$('#kt_tree_4').on("changed.jstree", function (e, data) {

    setTimeout(() => {
        var data_4 = $('#kt_tree_4').jstree(true).get_json('#')
        $('#kt_tree_44').jstree(true).settings.core.data =
            [{ text: data_4.text, children: data_4[0].children, state: { opened: true } }];

        $('#kt_tree_44').jstree(true).refresh();
    }, 100);

});

function addFileGlobal() {
    $('#upload').modal('show')
    enable_44_nodes()
    modal_opened_by_button = true
}

function addFiles() {

    var CurrentNode;
    var parent;

    if (modal_opened_by_button)
        parent = $("#kt_tree_44").jstree("get_selected");
    else
        parent = $('#kt_tree_4').jstree('get_selected');

    // var parent = $('#kt_tree_4').jstree('get_selected');

    createNode('#' + parent[0], "another_base_directory", "Assets.dwg", "first");

    toastr.success("File(s) uploaded successfully.");
    $('#upload').modal('hide')

}


function createNode(parent_node, new_node_id, new_node_text, position) {
    $('#kt_tree_4').jstree('create_node', $(parent_node), { "text": new_node_text, "id": new_node_id, icon: "fa fa-file text-success" }, position, false, false);
}

function disable_44_nodes() {
    if (!modal_opened_by_button) {
        $('#kt_tree_44 li').each(function () {
            $("#kt_tree_44").jstree().disable_node(this.id);
        })
    }
}

function enable_44_nodes() {
    $('#kt_tree_44 li').each(function () {
        $("#kt_tree_44").jstree().enable_node(this.id);
    })
}

function openHistory(){
    window.location.href = 'project_file_versions.html'
}

function download() {
    Swal.fire("Check out!", "File downloaded successfully!", "success");
}


function checkinSave(){
    $('#checkinModal').modal('hide')

    Swal.fire("Check in!", "New version checked in successfully!", "success");
}

$('#kt_select2_3').select2({
    placeholder: "Select Users",
});

$('#kt_select2_4').select2({
    placeholder: "Select Users",
});


