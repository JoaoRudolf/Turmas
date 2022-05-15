package br.com.projetosaula.springprojetoturmas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projetosaula.springprojetoturmas.entity.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
