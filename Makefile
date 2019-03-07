set_env_development:
	@rm docker-compose.override.yml || true
	ln -s docker-compose.development.yml docker-compose.override.yml

set_env_production:
	@rm docker-compose.override.yml || true
	ln -s docker-compose.production.yml docker-compose.override.yml