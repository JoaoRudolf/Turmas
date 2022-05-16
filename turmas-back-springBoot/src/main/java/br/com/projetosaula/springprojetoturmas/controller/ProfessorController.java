package br.com.projetosaula.springprojetoturmas.controller;

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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetosaula.springprojetoturmas.entity.Aluno;
import br.com.projetosaula.springprojetoturmas.entity.Pessoa;
import br.com.projetosaula.springprojetoturmas.entity.Professor;
import br.com.projetosaula.springprojetoturmas.repository.PessoaRepository;
import br.com.projetosaula.springprojetoturmas.repository.ProfessorRepository;

@RestController
@RequestMapping("/api/professor")
@CrossOrigin("*")
public class ProfessorController {
	@Autowired
	ProfessorRepository professorRepository;
	
	@Autowired
	PessoaRepository pessoaRepository;

	@GetMapping
	public List<Professor> getAll() {
		return professorRepository.findAll();		
	}
	
	@GetMapping("/{id}")
	public Professor buscarPeloId(@PathVariable Long id) {
		return professorRepository.findById(id).orElse(null);
	}
	
	
	@PostMapping
	public ResponseEntity<Professor> addProfessor(@RequestBody Professor professor) throws Exception {
		if(professor.getPessoa().getId() == null) {
	Pessoa profPes = pessoaRepository.save(professor.getPessoa());
	professor.setPessoa(profPes);
	}else {
		Pessoa pessoaVerificacao = pessoaRepository.findById(professor.getPessoa().getId()).orElseThrow(()-> new Exception ("Pessoa não existe"));
		professor.setPessoa(pessoaVerificacao);
	}
	return new ResponseEntity<Professor>(professorRepository.save(professor), HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Professor> update(@PathVariable Long id, @RequestBody Aluno alunoDetails) throws Exception {
		
		Professor professor = professorRepository.findById(id).orElseThrow(
				() -> new Exception("Não existe professor com o id " + id));
		Pessoa pessoa = professorRepository.findById(id).get().getPessoa();
		
		professor.setTurma(alunoDetails.getTurma());
		
		pessoa.setNome(alunoDetails.getPessoa().getNome());
		pessoa.setEndereco(alunoDetails.getPessoa().getEndereco());
		pessoa.setIdade(alunoDetails.getPessoa().getIdade());
		pessoa.setSexo(alunoDetails.getPessoa().getSexo());
		
		Professor updatedProfessor = professorRepository.save(professor);
		pessoaRepository.save(pessoa);
		return ResponseEntity.ok(updatedProfessor);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long id) {
		Long idPessoa = professorRepository.findById(id).get().getPessoa().getId();
		
		professorRepository.deleteById(id);
		pessoaRepository.deleteById(idPessoa);
	}
	
	
}
