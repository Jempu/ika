<!DOCTYPE html>
<html lang="fi">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ikatyros tarjoaa monenlaisia multimediapalveluita...">
    <meta name="keywords" content="kotisivut, websites, drone, kuvaus, dronekuvaus, it, multimedia">
    <link rel="shortcut icon" href="./img/logos/ikatyros.png" type="image/x-icon">
    <title>Ikatyros NY - Etusivu</title>
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">

    <script src="./js/jquery-3.6.0.min/jquery.js"></script>
    <script src="./js/cloud9carousel/jquery.cloud9carousel.js"></script>
<?php
function loadHtml(string $fileName, string $fileType = 'html', string $path = 'content/component') {
    include dirname(__FILE__) . "/$path/$fileName.$fileType";
}
?>
</head>

<body>

<?php
$indexJsonFile = './content/index.json';
$indexJsonData = json_decode(file_get_contents($indexJsonFile), true);
$response = $indexJsonData['site_status'];

switch ($response) {
    case 'busy-fully':
        loadHtml('res-busy');
        loadHtml('pitch');
        break;
    case 'busy':
        loadHtml('titlecard');
        loadHtml('res-busy');
        loadHtml('pitch');
        break;
    case 'maintain':
        loadHtml('titlecard');
        loadHtml('res-maintained');
        loadHtml('pitch');
        break;
    case 'maintain-fully':
        loadHtml('res-maintained');
        loadHtml('pitch');
        break;
    default:
        loadHtml('titlecard');
        // loadHtml('nav');
        loadHtml('nav-cart-btn');
        loadHtml('cart');
        loadHtml('services-list');
        loadHtml('services-body-simple');
        // loadHtml('reviews');
        loadHtml('pitch');
        loadHtml('footer');
        break;
}
?>
    <script type="text/javascript" src="./js/index.js"></script>
</body>

</html>