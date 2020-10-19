up:
	docker-compose build --no-cache
	docker-compose -f docker-compose.yml run --rm start_dependencies
	docker-compose -f docker-compose.yml up -d metabase
	docker-compose -f docker-compose.yml run --rm commits_analyzer
down:
	docker-compose stop
	docker-compose rm -f

