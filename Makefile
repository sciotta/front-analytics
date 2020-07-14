up:
	docker-compose build --no-cache
	docker-compose -f docker-compose.yml run --rm start_dependencies
	docker-compose -f docker-compose.yml run --rm front_statistics
down:
	docker-compose down -v

