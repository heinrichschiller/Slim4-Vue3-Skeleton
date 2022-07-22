<?php

declare(strict_types=1);

use Symfony\Component\Console\Application;

require_once __DIR__ . '/../vendor/autoload.php';

$container = (require __DIR__ . '/../bootstrap/app.php')->getContainer();

$app = $container->get(Application::class);
$app->run();