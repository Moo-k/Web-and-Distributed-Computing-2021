SELECT SUM(film.length)
FROM film
RIGHT JOIN film_actor
ON film.film_id = film_actor.film_id
WHERE film_actor.actor_id = (
    SELECT actor_id
    FROM actor
    WHERE last_name = 'WITHERSPOON' AND first_name = 'ANGELA'
);