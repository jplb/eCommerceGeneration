package com.IntegradorG3.LojaPrincipal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.IntegradorG3.LojaPrincipal.model.Categoria;
import com.IntegradorG3.LojaPrincipal.repository.CategoriaRepository;

@RestController
@RequestMapping("/categoria")
@CrossOrigin("*")
public class CategoriaController {
	
	@Autowired
	private CategoriaRepository repository;
	
	@GetMapping
	public List<Categoria> getAll() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Categoria> getById(@PathVariable long id){
		return repository.findById(id).map(resp-> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Categoria> post (@RequestBody Categoria novaCategoria) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(novaCategoria));
	}
	
	@PutMapping
	public ResponseEntity<Categoria> put (@RequestBody Categoria novaCategoria) {
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(repository.save(novaCategoria));
	}
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable long id) {
		repository.deleteById(id);
	}
	

	@GetMapping("/tema/{tema}")
	public ResponseEntity <List<Categoria>> getByTema(@PathVariable String tema){
		return ResponseEntity.ok(repository.findAllByTemaContainingIgnoreCase(tema));
	}

}
	
