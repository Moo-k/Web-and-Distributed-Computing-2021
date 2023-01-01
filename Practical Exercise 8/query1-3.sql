SELECT customer.first_name, customer.last_name, rental.rental_date
FROM rental
RIGHT JOIN customer
ON rental.customer_id = customer.customer_id
WHERE rental.return_date IS NULL
ORDER BY rental.rental_date LIMIT 1;