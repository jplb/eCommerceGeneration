package com.IntegradorG3.LojaPrincipal.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.IntegradorG3.LojaPrincipal.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
	
	public List<Categoria> findAllByTemaContainingIgnoreCase(String tema);
}