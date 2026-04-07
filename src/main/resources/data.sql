-- Create table just in case schema creation is slightly off, but Hibernate usually handles it with ddl-auto=update
-- Password for user1 is 'user123' (bcrypt encoded)
INSERT INTO users (username, password, role) VALUES ('user1', '$2a$12$K1H3180v3fB5UaC9FptC..1.4tV.rC1m8K0iIWeQv3l/s2R0.uJ/2', 'ROLE_USER');

-- Password for admin1 is 'admin123' (bcrypt encoded)
INSERT INTO users (username, password, role) VALUES ('admin1', '$2a$12$D/v6XlTIN9M/aV.Jc.OQ6OU16N5vK3C83YgHwP0.GgB2.y7.6e7Cq', 'ROLE_ADMIN');