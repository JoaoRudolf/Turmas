package br.com.projetosaula.springprojetoturmas.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.projetosaula.springprojetoturmas.entity.Aluno;
import br.com.projetosaula.springprojetoturmas.entity.Turma;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {
	
	public Aluno[] findAllByTurma(Optional<Turma> turma);

}
