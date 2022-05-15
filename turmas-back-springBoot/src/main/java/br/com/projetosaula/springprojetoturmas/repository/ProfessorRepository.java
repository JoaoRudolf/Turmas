package br.com.projetosaula.springprojetoturmas.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projetosaula.springprojetoturmas.entity.Professor;
import br.com.projetosaula.springprojetoturmas.entity.Turma;

public interface ProfessorRepository extends JpaRepository<Professor, Long>{
	
	public Professor[] findAllByTurma (Optional<Turma> turma);

}
