<?php

declare(strict_types=1);

namespace App\Action\Index;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Views\PhpRenderer;

final class IndexAction
{
    public function __invoke(Request $request, Response $response, array $args = []): Response
    {
        $renderer = new PhpRenderer(ROOT_DIR . 'resources/templates/');

        $response = $renderer->render($response, 'index.html');

        return $response;
    }
}
