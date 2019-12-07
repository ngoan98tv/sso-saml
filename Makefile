main:
	docker-compose up -d
	node first-app/index.js &
	node second-app/index.js &