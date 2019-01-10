# SingerofDarkNight.github.io

To generate new build:
```
ng build --base_href=/v2/ --prod
```
Then copy files from `dist/Gotham-Spinach` to `/v2` under this repo.

## nginx config
```
        location /v2/ {
                proxy_pass https://singerofdarknight.github.io;
        }

        location /experiment/ {
                proxy_pass https://singerofdarknight.github.io;
        }

```

## Generate your own build without conflict with others
Example
```
ng build --base_href=/experiment/yhvictor --prod
```
Then put everything under from `dist/Gotham-Spinach` to `/experiment/yhvictor`.

## Bash script that can help.
There's a bash script called `generate.sh` that can help you doing so.
Just copy `default.generate.config.sh` to `generate.config.sh` and modify value.
Then run `./generate.sh`.
