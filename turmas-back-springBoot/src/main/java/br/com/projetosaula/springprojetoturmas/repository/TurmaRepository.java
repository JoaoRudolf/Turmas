package br.com.projetosaula.springprojetoturmas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projetosaula.springprojetoturmas.entity.Turma;

public interface TurmaRepository extends JpaRepository<Turma, Long> {

}
