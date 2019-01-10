# SingerofDarkNight.github.io

To generate new build:
```
ng build --base_href=/v2/ --prod
```
Then copy files from `dist/Gotham-Spinach` to `/v2` under this repo.

## nginx config
```
        location /v2/ {
                proxy_pass https://singerofdarknight.github.io/v2/;
        }
```
