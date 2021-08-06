<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: text/html; charset=utf-8");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $variables = array();

    $variables['name'] = $_POST['name'] ? $_POST['name'] : 'Не указано';
    $variables['phone'] = $_POST['phone'] ? $_POST['phone'] : 'Не указано';
    $variables['email'] = $_POST['email'] ? $_POST['email'] : 'Не указано';
    
    $template = file_get_contents("mailTemplate.html");

    foreach($variables as $key => $value)
    {
        $template = str_replace('{{ '.$key.' }}', $value, $template);
    }

    $to      = 'healthydrinks@healthydrinks.ru';
    $subject = 'Заказ с сайта MatchaSauce';
    $headers = array(
        'From' => 'healthydrinks@healthydrinks.ru',
        'X-Mailer' => 'PHP/' . phpversion(),
        'Content-type' => 'text/html; charset=utf-8'
    );

    mail($to, $subject, $template, $headers);

    echo $template;

?>