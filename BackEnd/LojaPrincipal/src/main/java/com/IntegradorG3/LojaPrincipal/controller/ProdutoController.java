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

import com.IntegradorG3.LojaPrincipal.model.Produto;
import com.IntegradorG3.LojaPrincipal.repository.ProdutoRepository;

@RestController
@RequestMapping ("/produto")
@CrossOrigin ("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;
	
	@GetMapping
	public List<Produto> getAll() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> getById(@PathVariable long id){
		return repository.findById(id).map(resp-> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Produto> post (@RequestBody Produto novoProduto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(novoProduto));
	}
	
	@PutMapping
	public ResponseEntity<Produto> put (@RequestBody Produto novoProduto) {
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(repository.save(novoProduto));
	}
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable long id) {
		repository.deleteById(id);
	}
	

	@GetMapping("/nome/{nome}")
	public ResponseEntity <List<Produto>> getByNome(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}

}
