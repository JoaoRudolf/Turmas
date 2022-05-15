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
import br.com.projetosaula.springprojetoturmas.repository.AlunoRepository;
import br.com.projetosaula.springprojetoturmas.repository.PessoaRepository;
import br.com.projetosaula.springprojetoturmas.repository.TurmaRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/aluno")
public class AlunoController {
	
	@Autowired
	AlunoRepository alunoRepository;
	
	@Autowired
	PessoaRepository pessoaRepository;
	
	@Autowired
	TurmaRepository turmaRepository;
	
	@GetMapping
	public List<Aluno> getAll() {
		return alunoRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Aluno buscarPeloId(@PathVariable Long id) {
		return alunoRepository.findById(id).orElse(null);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Aluno> addAluno(@RequestBody Aluno aluno) {
		Pessoa pessoaAluno = pessoaRepository.save(aluno.getPessoa());
		aluno.setPessoa(pessoaAluno);
		
		Aluno alunoResponse = alunoRepository.save(aluno);
		
		return new ResponseEntity<Aluno>(alunoResponse, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long id) {
		Long idPessoa = alunoRepository.findById(id).get().getPessoa().getId();
		
		alunoRepository.deleteById(id);
		pessoaRepository.deleteById(idPessoa);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Aluno> update(@PathVariable Long id, @RequestBody Aluno alunoDetails) throws Exception {
		
		Aluno aluno = alunoRepository.findById(id).orElseThrow(
				() -> new Exception("Não existe aluno com o id " + id));
		Pessoa pessoa = alunoRepository.findById(id).get().getPessoa();
		
		aluno.setAno(alunoDetails.getAno());
		aluno.setTurma(alunoDetails.getTurma());
		
		pessoa.setNome(alunoDetails.getPessoa().getNome());
		pessoa.setEndereco(alunoDetails.getPessoa().getEndereco());
		pessoa.setIdade(alunoDetails.getPessoa().getIdade());
		pessoa.setSexo(alunoDetails.getPessoa().getSexo());
		
		Aluno updatedAluno = alunoRepository.save(aluno);
		pessoaRepository.save(pessoa);
		return ResponseEntity.ok(updatedAluno);
		
	}

}
