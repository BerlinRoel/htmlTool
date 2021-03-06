$(document).ready(function(){

	var defaultHTML =
		"<!DOCTYPE html>\n" +
		"<html lang=\"en\">\n" +
		"	<head>\n" +
		"		<title>Bootstrap Example</title>\n" +
		"		<meta charset=\"utf-8\">\n" +
		"  		<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
		"  		<link rel=\"stylesheet\" href=\"bootstrap.min.css\">\n" +
		"  		<script src=\"jquery.min.js\"></script>\n" +
		"  		<script src=\"bootstrap.min.js\"></script>\n" +
		"	</head>\n" +
		"	<body>\n" +
		"	</body>\n" +
		"</html>";
    $(".txtCode").val(defaultHTML);

    $(".output").html(defaultHTML);

	$(".btn-render").click(function(){
	    render();
	});

	$(".txtCode").keydown(function(event) {
		if(event.keyCode===9){
			var v=this.value, s=this.selectionStart, e=this.selectionEnd;
			this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;
		}
	});

	$(".btn-alert-success").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"alert alert-success\">\n" +
		"	<strong>Success!</strong> Indicates a successful or positive action.\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	});

	$(".btn-alert-warning").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"alert alert-warning\">\n" +
		"	<strong>Success!</strong> Indicates a successful or positive action.\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	}); 

	$(".btn-alert-info").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"alert alert-info\">\n" +
		"	<strong>Success!</strong> Indicates a successful or positive action.\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	});

	$(".btn-alert-danger").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"alert alert-danger\">\n" +
		"	<strong>Success!</strong> Indicates a successful or positive action.\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	}); 	 		

	$(".btn-thumbnail").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"container\">\n" +          
		"	<img src=\"McLaren-mr-bean-p.jpg\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"304\" height=\"236\">\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	}); 

	$(".btn-img-rounded").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"container\">\n" +          
		"	<img src=\"McLaren-mr-bean-p.jpg\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"304\" height=\"236\">\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	});

	$(".btn-img-circle").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"container\">\n" +          
		"	<img src=\"McLaren-mr-bean-p.jpg\" class=\"img-circle\" alt=\"Cinque Terre\" width=\"304\" height=\"236\">\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	});

	$(".btn-img-responsive").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<div class=\"container\">\n" +          
		"	<img src=\"McLaren-mr-bean-p.jpg\" class=\"img-responsive\" alt=\"Cinque Terre\" width=\"414\" height=\"500\">\n" +
		"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		       
	}); 		

	$(".btn-basic-table").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
            "<div class=\"table-responsive\">\n" +
			"	<table class=\"table table-hover\">\n" +
			"		<thead>\n" +
			"			<tr>\n" +
			"				<th>Firstname</th>\n" +
			"				<th>Lastname</th>\n" +
			"				<th>Email</th>\n" +
			"			</tr>\n" +
			"		</thead>\n" +
			"		<tbody>\n" +
			"			<tr>\n" +
			"				<td>John</td>\n" +
			"				<td>Doe</td>\n" +
			"				<td>john@example.com</td>\n" +
			"			</tr>\n" +
			"			<tr>\n" +
			"				<td>Mary</td>\n" +
			"				<td>Moe</td>\n" +
			"				<td>mary@example.com</td>\n" +
			"			</tr>\n" +
			"			<tr>\n" +
			"				<td>July</td>\n" +
			"				<td>Dooley</td>\n" +
			"				<td>july@example.com</td>\n" +
			"			</tr>\n" +
			"		</tbody>\n" +
			"	</table>\n" +
			"</div>\n";

        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();			
    });

	$(".btn-striped-table").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
            "<div class=\"table-responsive\">\n" +        
			"	<table class=\"table table-striped table-hover\">\n" +
			"		<thead>\n" +
			"			<tr>\n" +
			"				<th>Firstname</th>\n" +
			"				<th>Lastname</th>\n" +
			"				<th>Email</th>\n" +
			"			</tr>\n" +
			"		</thead>\n" +
			"		<tbody>\n" +
			"			<tr>\n" +
			"				<td>John</td>\n" +
			"				<td>Doe</td>\n" +
			"				<td>john@example.com</td>\n" +
			"			</tr>\n" +
			"			<tr>\n" +
			"				<td>Mary</td>\n" +
			"				<td>Moe</td>\n" +
			"				<td>mary@example.com</td>\n" +
			"			</tr>\n" +
			"			<tr>\n" +
			"				<td>July</td>\n" +
			"				<td>Dooley</td>\n" +
			"				<td>july@example.com</td>\n" +
			"			</tr>\n" +
			"		</tbody>\n" +
			"	</table>\n" +
			"</div>\n";

        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();			
    });    

	$(".btn-grid3-equal").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
			"<div class=\"container-fluid\">\n" +
			"	<div class=\"row\">\n" +
			"		<div class=\"col-sm-4\" style=\"background-color:lavender;\">.col-sm-4</div>\n" +
			"		<div class=\"col-sm-4\" style=\"background-color:lavenderblush;\">.col-sm-4</div>\n" +
			"		<div class=\"col-sm-4\" style=\"background-color:lavender;\">.col-sm-4</div>\n" +
			"	</div>\n" +
			"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		
	});

	$(".btn-grid2-unequal").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
			"<div class=\"container-fluid\">\n" +
			"	<div class=\"row\">\n" +
			"		<div class=\"col-sm-4\" style=\"background-color:lavender;\">.col-sm-4</div>\n" +
			"		<div class=\"col-sm-8\" style=\"background-color:lavenderblush;\">.col-sm-8</div>\n" +
			"	</div>\n" +
			"</div>\n";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();		
	});	

    $(".btn-form-login").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
		"<form action=\"\">\n" +
		"	Username:<br>\n" +
		"	<input type=\"email\" name=\"username\" placeholder=\"Your registered email address\">\n" +
		"	<br>\n" +
		"	Password:<br>\n" +
		"	<input type=\"password\" name=\"pword\" placeholder=\"Your registered password\">\n" +
		"	<br><br>\n" +
		"	<input type=\"submit\" value=\"Submit\">\n" +
		"</form>\n";

        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();
    });

    $(".btn-any-text").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var anyText = prompt("Please enter value for your text", "Any text goes here");
        if (anyText == null) return;
        $txt.val(textAreaTxt.substring(0, caretPos) + anyText + textAreaTxt.substring(caretPos) );
        render();
    });

    $(".btn-add-class").on('click', function() {
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var className = prompt("Please enter a class name", "className");
        if (className == null) return;
        var txtToAdd = 
			"class=\"" +  className + "\"";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();
    });         

    $(".btn-label").on('click', function() {
    	var label = prompt("Please enter value for your label", "Label1");
    	if (label == null) return;
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
			"<label>"+label+"</label>";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();
    });

    $(".btn-text-field").on('click', function() {
    	var placeholder = prompt("Please enter a placeholder for text field", "placeholder");
    	if (placeholder == null) return;
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
			"<input type=\"text\" placeholder=\"" + placeholder + "\">";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();
    });

    $(".btn-paragraph").on('click', function() {
    	var paragraph = prompt("Please enter a paragraph", "The quick brown fox jumps over the lazy dog.");
    	if (paragraph == null) return;
        var $txt = $(".txtCode");
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = 
			"<p>" + paragraph + "</p>";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
        render();
    });       

    function render() {
		$(".output").html($(".txtCode").val());    	
    }


	(function () {
		var textFile = null,
		makeTextFile = function (text) {
			var data = new Blob([text], {type: 'text/plain'});

			// If we are replacing a previously generated file we need to
			// manually revoke the object URL to avoid memory leaks.
			if (textFile !== null) {
				window.URL.revokeObjectURL(textFile);
			}

			textFile = window.URL.createObjectURL(data);
			return textFile;
		};

		var create = document.getElementById('create'),
		textbox = document.getElementById('textbox');

		create.addEventListener('click', function () {
			var link = document.createElement('a');
			var filename = prompt("Please enter a filename", "file1.html");
			link.setAttribute('download', filename);
			link.href = makeTextFile(textbox.value);
			document.body.appendChild(link);
			// wait for the link to be added to the document
			window.requestAnimationFrame(function () {
				var event = new MouseEvent('click');
			  	link.dispatchEvent(event);
			  	document.body.removeChild(link);
			});

		}, false);
	})();

});

