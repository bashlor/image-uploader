start-prod: \
    docker-start-prod

stop-prod: \
    docker-stop-prod

start-dev: \
	docker-start-dev

stop-dev: \
	docker-stop-dev

build-api-image:
	docker build --file ./apps/api/Dockerfile_build --target runner --tag image-uploader-api:latest .

build-client-image:
	docker build --file ./apps/client/Dockerfile_build --target runner --tag image-uploader-client:latest .

docker-start-prod:
	docker compose up -d

docker-stop-prod:
	docker compose down

docker-start-dev:
	docker compose -f docker-compose.dev.yml up -d

docker-stop-dev:
	docker compose -f docker-compose.dev.yml down -v --remove-orphans